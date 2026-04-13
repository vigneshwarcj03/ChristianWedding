import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Serve the audio file from public folder via API
    const audioPath = join(process.cwd(), 'public', 'wedding-theme.mp3');
    const audioBuffer = await readFile(audioPath);

    const response = new NextResponse(audioBuffer);
    response.headers.set('Content-Type', 'audio/mpeg');
    response.headers.set('Content-Length', audioBuffer.length.toString());
    response.headers.set('Accept-Ranges', 'bytes');
    response.headers.set('Cache-Control', 'public, max-age=604800');
    response.headers.set('Access-Control-Allow-Origin', '*');

    return response;
  } catch (error) {
    console.error('Error serving audio file:', error);
    return NextResponse.json(
      { error: 'Audio file not found' },
      { status: 404 }
    );
  }
}
