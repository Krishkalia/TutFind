import { JitsiMeeting } from "@jitsi/react-sdk";
import { useParams } from "react-router-dom";

function JitsiMeet() {
    const {id}=useParams()
    return ( 
        <>
            {id && (
                <div style={{ height: "600px", marginTop: "20px" }}>
                    <JitsiMeeting
                        roomName={id}
                        configOverwrite={{
                            startWithAudioMuted: true,
                            disableModeratorIndicator: true
                        }}
                        userInfo={{
                            displayName: "Course Host"
                        }}
                        onApiReady={(externalApi) => {
                            console.log("Jitsi API ready");
                        }}
                        getIFrameRef={(iframeRef) => {
                            iframeRef.style.height = "600px";
                            iframeRef.style.width = "100%";
                        }}
                    />
                </div>
            )}
        </>
     );
}

export default JitsiMeet;