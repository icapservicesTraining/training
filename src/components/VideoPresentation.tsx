export default function VideoPresentation() {

    return (
      <div>
      <video controls width="450" autoPlay>
        <source src='/assets/MY_VIDEO.mp4' type="video/mp4" />
      </video>

      <p />
      <iframe
        title="iaVideo"
        src="https://app.colossyan.com/embed/f065dde9-8a4e-4ad7-839f-c94f04c9681a"
        width="560"
        height="315"
        frameBorder="0"
        allow="autoplay; 
        fullscreen; 
        picture-in-picture"
        allowFullScreen>
      </iframe>

    </div>
    );
  }