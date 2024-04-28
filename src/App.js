import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './App.css';

function App() {


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  const copyContent = () => {
    var copyText = document.getElementById("textsearch");

    // Select the text field
    copyText.select();


    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    alert(" Copied")
  }


  return (
    <>

      <div className=' flex flex-col justify-center items-center h-600px'>
        <h1 className='font-black text-2xl mb-5 text-blue-400'>Tap to search / <span className='text-red-400'> Release to stop</span></h1>


        <textarea value={transcript} name='textsearch' id='textsearch' placeholder='Your text here' className='text-2xl border-2 border-slate-300 p-2' cols='80' rows='10'></textarea>
        <div className='flex'>

          <button onMouseDown={SpeechRecognition.startListening} onMouseUp={SpeechRecognition.stopListening} className='w-24 h-24 bg-blue-400 rounded-full flex justify-center items-center mt-3' type='button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#ffffff" fill="none">
            <path d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M17 7H14M17 11H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg></button>

          <button onClick={resetTranscript} className='w-24 h-24 bg-red-400 rounded-full flex justify-center items-center mt-3' type='button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#ffffff" fill="none">
            <path d="M4 12C4 8.72077 4 7.08116 4.81382 5.91891C5.1149 5.48891 5.48891 5.1149 5.91891 4.81382C7.08116 4 8.72077 4 12 4C15.2792 4 16.9188 4 18.0811 4.81382C18.5111 5.1149 18.8851 5.48891 19.1862 5.91891C20 7.08116 20 8.72077 20 12C20 15.2792 20 16.9188 19.1862 18.0811C18.8851 18.5111 18.5111 18.8851 18.0811 19.1862C16.9188 20 15.2792 20 12 20C8.72077 20 7.08116 20 5.91891 19.1862C5.48891 18.8851 5.1149 18.5111 4.81382 18.0811C4 16.9188 4 15.2792 4 12Z" stroke="currentColor" stroke-width="1.5" />
          </svg></button>

          <button onClick={copyContent} className=' w-24 h-24 bg-black text-white rounded-full grid justify-center items-center mt-3' type='button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#ffffff" fill="none">
            <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></button>
        </div>

        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}

      </div>
    </>
  );
}

export default App;
