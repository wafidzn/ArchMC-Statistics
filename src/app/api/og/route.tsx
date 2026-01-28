import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get parameters from URL (for future customization)
    const title = searchParams.get('title') || 'ArchMC Statistics';
    const subtitle = searchParams.get('subtitle') || 'Real-Time Player Stats & Leaderboards';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#171717', // Same grey as your homepage
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
          }}
        >
          {/* Background decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '120px',
              height: '120px',
              backgroundColor: '#FF000015',
              borderRadius: '16px',
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              width: '100px',
              height: '100px',
              backgroundColor: '#FFFFFF10',
              borderRadius: '16px',
            }}
          />

          {/* Main content container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            {/* Logo Container */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '48px',
              }}
            >
              <img
                src={`${new URL(request.url).origin}/favicon.ico`}
                width="100"
                height="100"
                alt="ArchMC Logo"
                style={{
                  borderRadius: '16px',
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '24px',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '28px',
                color: '#a3a3a3',
                maxWidth: '800px',
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}