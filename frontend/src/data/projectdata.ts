export interface Projects {
    [key: string]: { previewImage: string, title: string, images: string[], data: string, dataInfo: string };
}

export const collection: Projects = {};
collection["1"] = { 
    previewImage : "https://i.gyazo.com/352094e86be41ffea8288b9ba5f2230f.png",
    title: "AI Stream Commentator",
    images : [
        'https://i.gyazo.com/003250ef3d4846ffa7deb9116980a8ff.png',
        'https://i.gyazo.com/45c3b81b6a39372c32013948685cfd4d.png'
    ],
    data : " \
<h2>An AI Powered Commentator that works with any modern browser</h2> \
<p>This web application uses WebRTC to work on any modern browser (Chrome >= v.72; Firefox >= v.66) without plugins. Stream desktop content into the video player and a GPT-4 vision model will analyze the content. \
Commentary is generated based on the prompt given and the image analyzed.</p> \
<h3>Powered by Python and Streamlit</h3>\
<p>Deployed via Streamlit, the back end is powered by python code that converts the image into a numpy array to work with OpenCV. This array is converted into base64 frames and sent to the GPT-4 vision \
model.</p>\
<h3>NAT Traversal with Coturn</h3> \
<p>With WebRTC protocol, an important method to handle NAT traversal is to use ICE servers. \
The AI Stream Commentator is set up with open source implementation of a TURN server called Coturn to handle VoIP media traffic. \
This provides a stability to connections in various network environments.</p> \
",
    dataInfo: ' \
<h4>Github Link:</h4> \
<p><a href="https://github.com/Ai-riku/GPT-Live-Commentator">https://github.com/Ai-riku/GPT-Live-Commentator</a></p> \
<h4>Website Link:</h4> \
<p><a href="https://ai-commentary.streamlit.app">https://ai-commentary.streamlit.app</a></p>\
<h4>Date Created:</h4> \
<p>Nov 11, 2023</p>'
}