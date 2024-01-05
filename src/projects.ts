export interface Projects {
    [key: string]: { previewImage: string, data: string };
}

const PROJECTS_KEY = "projects";

export function saveProjects(projects: Projects): void {
    return localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function initializeProjects(): Projects {
    var collection: Projects = {};
    collection["1"] = { 
        previewImage : "https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png",
        data : " \
    <h2>Attractive website using the React framework</h2> \
    <p>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</p> \
    <h3>Modern Frameworks</h3> \
    <p>Through learning modern frameworks, the potential to create higher quality products increases. That\'s why I am always open to learning new ideas to increase the quality of my code. \
    As well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</p> \
    <h3>React Routing</h3> \
    <p>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading. \
    Through using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</p> \
    "}
    collection["2"] = { 
        previewImage : "https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png",
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
        </ul>'}
    saveProjects(collection)
    return collection
}

export function getProjects(): Projects {
    let projects: Projects | null = null;
    try {
        // @ts-expect-error OK to throw here since we're catching
        projects = JSON.parse(localStorage.getItem(TODOS_KEY));
      } catch (e) {}
      if (!projects) {
        projects = initializeProjects();
      }
    return projects;
}