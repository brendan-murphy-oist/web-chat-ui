import React, { useEffect, useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';

import './WebChat.css';

const WebChat = ({ className, onFetchToken, store, token }) => {
  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'Transparent'
      }),
    []
  );

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token ? (
    <ReactWebChat className={`${className || ''} web-chat`} directLine={directLine} store={store} styleSet={styleSet} />
  ) : (
    <div className={`${className || ''} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <span className="material-Icon material-Icon--Loading" />
        </div>
        <p>Please wait while we connect you.</p>
      </div>
    </div>
  );
};

export default WebChat;
