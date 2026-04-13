import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Diagnostic endpoint to check file system access
    const fs = await import('fs');
    const path = await import('path');
    
    const audioPath = path.join(/*turbopackIgnore: true*/ process.cwd(), 'public', 'wedding-theme.mp3');
    
    const options = {
      cwd: process.cwd(),
      public: path.join(/*turbopackIgnore: true*/ process.cwd(), 'public'),
      audioFile: audioPath,
      fileExists: fs.existsSync(audioPath),
    };

    if (fs.existsSync(audioPath)) {
      const stats = fs.statSync(audioPath);
      return NextResponse.json({
        status: 'success',
        message: 'Audio file found',
        path: audioPath,
        size: stats.size,
        ...options,
      });
    } else {
      // Try to list public directory
      const publicDir = path.join(/*turbopackIgnore: true*/ process.cwd(), 'public');
      let contents: string[] = [];
      
      if (fs.existsSync(publicDir)) {
        try {
          contents = fs.readdirSync(publicDir);
        } catch (e) {
          console.error('Cannot read public directory:', e);
        }
      }
      
      return NextResponse.json({
        status: 'file_not_found',
        message: 'Audio file not found at expected location',
        ...options,
        publicDirExists: fs.existsSync(publicDir),
        publicDirContents: contents.slice(0, 20), // First 20 files
      }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}
