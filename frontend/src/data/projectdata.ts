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

collection["2"] = { 
    previewImage : "https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png",
    title: "Personal Website",
    images : [
        'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png',
        'https://i.gyazo.com/e26ae68bbcc06b00b4af6c2b0b6cceb2.png',
        'https://i.gyazo.com/429cb1359e81a9c50f27871635187024.png'
    ],
    data : " \
<h2>Attractive website using React</h2> \
<p>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</p> \
<h3>Vite Framework</h3> \
<p>Through learning frameworks like Vite, the potential to create higher quality products increases. That\'s why I am always open to learning new ideas to increase the quality of my code. \
As well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</p> \
<h3>React Routing</h3> \
<p>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading. \
Through using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</p> \
",
    dataInfo: ' \
<h4>Github Link:</h4> \
<p><a href="https://github.com/fchui/personal-website">https://github.com/fchui/personal-website</a></p> \
<h4>Date Created:</h4> \
<p>Aug 23, 2023</p>'
}

collection["3"] = { 
    previewImage : "https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png",
    title : 'DIRTS - Capstone Project',
    images : [
        'https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png',
        'https://i.gyazo.com/f6fa1beac5de26bceb8cc1db120f0d29.png',
        'https://i.gyazo.com/f5ff541950e0112d42179c7694991ae9.png'
    ],
    data : ' \
    <h2>Helpful Assistant For Gardeners</h2> \
    <p>Capstone Presentation: <a href="https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s">https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s</a></p> \
    <p>DIRTS is a sensor package that sends soil data directly to your mobile phone via Bluetooth. The application processes soil data and is able to give suggestions for growing specific plants</p> \
    <h3>Detailed Soil Data</h3> \
    <p>The device accurately measures soil health based on three parameters: Ph, Humidity and Temperature. A history of measurements is kept and users are able to learn what types of plants is suggested for the given soil.</p> \
    <h3>Automated Watering System</h3> \
    <p>The user can set a specific plant to grow inside the application. The application will send growing instructions back into the sensor which can be connected to an irrigation system that can automatically water the plants.</p> \
    <h3>Sqlite Database</h3> \
    <p>The application is connected to a SQLite database that contains the various plant data. The application is able to filter for specific attributes or search for specific plants</p>\
    <h3>My Contribution</h3> \
    <p>Specifically, I worked on the software portion of this project. I worked on the Android and IOS application completely, in coordination with my peers. I credit these contriubtions to my peers:</p> \
    <ul> \
        <li>Mehar Rehill - Plant Database and Research</li> \
        <li>Kyle Granville - Embedded Systems</li> \
        <li>Gurparkash Singh - Product Design and Structure</li> \
    </ul>',
    dataInfo : '<h4>Github Link:</h4> \
    <a href="https://github.com/fchui/DIRTS">https://github.com/fchui/DIRTS</a> \
    <h4>Date Created:</h4> \
    <p>15 May, 2022</p>'
}