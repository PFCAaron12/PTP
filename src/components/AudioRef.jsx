import { collection, doc, setDoc } from "firebase/firestore"; 

export const AudioRef = collection(db, "audio");
await setDoc(doc(audioRef, "0"), {
	id:0,
	played: 0,
	genre: 'Other',
	title:'DEEPER PURPLE PLUCK',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_14 DEEPER PURPLE_PLUCK C2ogg.wav'
});
await setDoc(doc(audioRef, "1"), {
	id:1,
	played: 0,
	genre: 'Other',
	title:'ACOUSTICG',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_ACOUSTICG 1_C3.wav'
});
await setDoc(doc(audioRef, "2"), {
	id:2,
	played: 0,
	genre: 'Other',
	title:'BooBass',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_BooBass.wav'
});
await setDoc(doc(audioRef, "3"), {
	id:3,
	played: 0,
	genre: 'Other',
	title:'FLS Crash a',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_FLS Crash 02a.wav'
});
await setDoc(doc(audioRef, "4"), {
	id:4,
	played: 0,
	genre: 'Other',
	title:'FLS Crash b',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_FLS Crash 02b.wav'
});
await setDoc(doc(audioRef, "5"), {
	id:5,
	played: 0,
	genre: 'Other',
	title:'FLS Kick',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_FLS_Kick 02.wav'
});
await setDoc(doc(audioRef, "6"), {
	id:6,
	played: 0,
	genre: 'Other',
	title:'FLS Rim',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_FLS_Rim 02.wav'
});
await setDoc(doc(audioRef, "7"), {
	id:7,
	played: 0,
	genre: 'Other',
	title:'Master',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_Master.wav'
});
await setDoc(doc(audioRef, "8"), {
	id:8,
	played: 0,
	genre: 'Other',
	title:'Selected',
	artist:'funky yeezy',
	img:'../audioimg/UserProfile.png',
	src: '../beats/FunkyYeezy/funky yeezy_Selected.wav'
});
await setDoc(doc(audioRef, "9"), {
	id:9,
	played: 0,
	genre: 'Other',
	title:'DEEPER PURPLE PLUCK',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_33 DEEPER PURPLE_PLUCK G3ogg.wav'
});
await setDoc(doc(audioRef, "10"), {
	id:10,
	played: 0,
	genre: 'Other',
	title:'808-Stick1',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_808-Stick1.wav'
});
await setDoc(doc(audioRef, "11"), {
	id:11,
	played: 0,
	genre: 'Other',
	title:'ACOUSTICG',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_ACOUSTICG 1_A4.wav'
});
await setDoc(doc(audioRef, "12"), {
	id:12,
	played: 0,
	genre: 'Other',
	title:'Bass',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_Bass.wav'
});
await setDoc(doc(audioRef, "13"), {
	id:13,
	played: 0,
	genre: 'Other',
	title:'BooBass',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_BooBass.wav'
});
await setDoc(doc(audioRef, "14"), {
	id:14,
	played: 0,
	genre: 'Other',
	title:'HHats17',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_HHats17.wav'
});
await setDoc(doc(audioRef, "15"), {
	id:15,
	played: 0,
	genre: 'Other',
	title:'Jupiter',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_Jupiter.wav'
});
await setDoc(doc(audioRef, "16"), {
	id:16,
	played: 0,
	genre: 'Other',
	title:'Master',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_Master.wav'
});
await setDoc(doc(audioRef, "17"), {
	id:17,
	played: 0,
	genre: 'Other',
	title:'Selected',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_Selected.wav'
});
await setDoc(doc(audioRef, "18"), {
	id:18,
	played: 0,
	genre: 'Other',
	title:'Venus',
	artist:'give me me ,i c no equal',
	img:'../audioimg/UserProfile.png',
	src: '../beats/GiveMeMe/give me me ,i c no equal_Venus.wav'
});