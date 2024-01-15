import { io } from 'socket.io-client';

const URL =
	process.env.NODE_ENV === 'production'
		? 'https://jaipur-backend.onrender.com/'
		: 'http://192.168.0.22:3000';

export const socket = io(URL, {
	autoConnect: false,
});
