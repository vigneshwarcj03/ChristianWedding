import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In production, public assets are served statically
    // This API route serves as a fallback with proper headers
    
    // Try multiple possible paths where the file might be
    const possiblePaths = [
      join(/*turbopackIgnore: true*/ process.cwd(), 'public', 'wedding-theme.mp3'),
      join(/*turbopackIgnore: true*/ process.cwd(), '.next', 'static', 'public', 'wedding-theme.mp3'),
    ];

    let audioBuffer: Buffer | null = null;
    let lastError: Error | null = null;
    
    for (const path of possiblePaths) {
      try {
        audioBuffer = await readFile(path);
        console.log(`Successfully read audio from: ${path}`);
        break;
      } catch (err) {
        lastError = err as Error;
        console.log(`Failed to read from ${path}: ${lastError.message}`);
        continue;
      }
    }

    if (!audioBuffer) {
      console.error('Failed to load audio file from all paths', lastError);
      // Return JSON error with proper error code
      return NextResponse.json(
        { 
          error: 'Audio file not found',
          details: lastError?.message,
          timestamp: new Date().toISOString()
        },
        { status: 404 }
      );
    }

    const response = new NextResponse(new Uint8Array(audioBuffer), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=604800',
        'Access-Control-Allow-Origin': '*',
        'x-vercel-skip-compression': 'true',
        'ETag': Buffer.from(audioBuffer).toString('base64').slice(0, 32),
      },
    });

    return response;
  } catch (error) {
    console.error('Error serving audio file:', error);
    return NextResponse.json(
      { 
        error: `Server error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
