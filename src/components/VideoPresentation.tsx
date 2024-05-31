/**
 * Composant qui permet d'afficher mes vidéos 
 * @returns 
 */
export default function VideoPresentation() {

    return (
      <div>IA qui présente 
      <video controls autoPlay width="460">
        <source src='/assets/MY_VIDEO.mp4' type="video/mp4" />
      </video>

      <p />IA qui présente avec un questionnaire
      <iframe
        title="iaVideo"
        src="https://app.colossyan.com/embed/f065dde9-8a4e-4ad7-839f-c94f04c9681a"
        width="460"
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