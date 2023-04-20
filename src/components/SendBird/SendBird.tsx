import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import "./styles.css"

const myColorSet = {
    '--sendbird-dark-primary-500': '#027d69',
    '--sendbird-dark-primary-400': '#259c72',
    '--sendbird-dark-primary-300': '#259c72',
    '--sendbird-light-primary-200': '#FFFFFF',
    '--sendbird-light-primary-100': '#FFFFFF',
};

const myChatApp = () => {
    return (
        <SendbirdApp
            appId="D10835D6-70F1-415D-B70A-5E2DB877C93C"
            userId="sendbird_desk_agent_id_c33d88b0-efd8-41ca-870e-07a69831760f"
            nickname="Fernando Salas"
            profileUrl="NDSMotorSpot"
            accessToken="2965e9ae35d15c0fe389aa0ab764d6dd47dad389"
            theme="dark"
            colorSet={myColorSet}
            allowProfileEdit={true}
            showSearchIcon={true}

        ></SendbirdApp>
    );
}

export default myChatApp;