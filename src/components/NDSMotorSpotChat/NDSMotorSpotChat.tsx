import React from 'react';
import SendbirdApp from "@sendbird/uikit-react/App";
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import ChannelList from "@sendbird/uikit-react/ChannelList";
import OpenChannel from '@sendbird/uikit-react/OpenChannel';


const openChannelApp = () => {
    return (
        <SendbirdProvider
            appId={"D10835D6-70F1-415D-B70A-5E2DB877C93C"}
            userId={"sendbird_desk_agent_id_c33d88b0-efd8-41ca-870e-07a69831760f"}
        >
            <ChannelList
              />
        </SendbirdProvider>
    );
}

/* 
<OpenChannel
    channelUrl={'sendbird_open_channel_20997_b392ba79aca89dfd7668e1c71aecdf1b646f7b51'}
></OpenChannel>
*/
export default openChannelApp;