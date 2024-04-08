import { useState } from 'react';
import socket from '../server';

const askUserName = () => {
    const [user, setUser] = useState(null);

    const userName = prompt('Please enter your name');
    console.log('uuu', userName);

    socket.emit('login', userName, (res) => {
        console.log('Res', res);
        if (res.ok) {
            setUser(res.data);
        } else {
            alert(res.error);
        }
    });
};

export default askUserName;
