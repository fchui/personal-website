--
-- PostgreSQL database cluster dump
--

-- Started on 2024-03-07 11:17:37

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- User Configurations
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-03-07 11:17:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2024-03-07 11:17:37

--
-- PostgreSQL database dump complete
--

--
-- Database "my_database" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-03-07 11:17:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4787 (class 1262 OID 16395)
-- Name: my_database; Type: DATABASE; Schema: -; Owner: my_user
--

CREATE DATABASE my_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE my_database OWNER TO my_user;

\connect my_database

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-03-07 11:17:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2024-03-07 11:17:39

--
-- PostgreSQL database dump complete
--

--
-- Database "projects" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-03-07 11:17:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4787 (class 1262 OID 16403)
-- Name: projects; Type: DATABASE; Schema: -; Owner: my_user
--

CREATE DATABASE projects WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE projects OWNER TO my_user;

\connect projects

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16405)
-- Name: projects; Type: TABLE; Schema: public; Owner: my_user
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    previewimage character varying(255),
    title character varying(50),
    images text,
    data text,
    datainfo text
);


ALTER TABLE public.projects OWNER TO my_user;

--
-- TOC entry 215 (class 1259 OID 16404)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: my_user
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO my_user;

--
-- TOC entry 4788 (class 0 OID 0)
-- Dependencies: 215
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: my_user
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 4634 (class 2604 OID 24586)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 4781 (class 0 OID 16405)
-- Dependencies: 216
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: my_user
--

COPY public.projects (id, previewimage, title, images, data, datainfo) FROM stdin;
3	https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png	DIRTS - Capstone Project	https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png,\n        https://i.gyazo.com/f6fa1beac5de26bceb8cc1db120f0d29.png,\n        https://i.gyazo.com/f5ff541950e0112d42179c7694991ae9.png	    <h2>Helpful Assistant For Gardeners</h2> \n    \t<p>Capstone Presentation: <a href="https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s">https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s</a></p> \n    \t<p>DIRTS is a sensor package that sends soil data directly to your mobile phone via Bluetooth. The application processes soil data and is able to give suggestions for growing specific plants</p> \n   \t\t<h3>Detailed Soil Data</h3> \n   \t\t<p>The device accurately measures soil health based on three parameters: Ph, Humidity and Temperature. A history of measurements is kept and users are able to learn what types of plants is suggested for the given soil.</p> \n    \t<h3>Automated Watering System</h3> \n    \t<p>The user can set a specific plant to grow inside the application. The application will send growing instructions back into the sensor which can be connected to an irrigation system that can automatically water the plants.</p> \n    \t<h3>Sqlite Database</h3> \n    \t<p>The application is connected to a SQLite database that contains the various plant data. The application is able to filter for specific attributes or search for specific plants</p>\n    \t<h3>My Contribution</h3> \n    \t<p>Specifically, I worked on the software portion of this project. I worked on the Android and IOS application completely, in coordination with my peers. I credit these contriubtions to my peers:</p>\n    \t<ul> \n        \t<li>Mehar Rehill - Plant Database and Research</li> \n        \t<li>Kyle Granville - Embedded Systems</li> \n        \t<li>Gurparkash Singh - Product Design and Structure</li> \n    \t</ul>	<h4>Github Link:</h4>\n    \t<a href="https://github.com/fchui/DIRTS">https://github.com/fchui/DIRTS</a>\n    \t<h4>Date Created:</h4>\n    \t<p>15 May, 2022</p>
1	https://i.gyazo.com/352094e86be41ffea8288b9ba5f2230f.png	AI Stream Commentator	https://i.gyazo.com/003250ef3d4846ffa7deb9116980a8ff.png,https://i.gyazo.com/45c3b81b6a39372c32013948685cfd4d.png	<h2>An AI Powered Commentator that works with any modern browser</h2> \n<p>This web application uses WebRTC to work on any modern browser (Chrome >= v.72; Firefox >= v.66) without plugins. Stream desktop content into the video player and a GPT-4 vision model will analyze the content. \\\nCommentary is generated based on the prompt given and the image analyzed.</p>\n<h3>Powered by Python and Streamlit</h3>\n<p>Deployed via Streamlit, the back end is powered by python code that converts the image into a numpy array to work with OpenCV. This array is converted into base64 frames and sent to the GPT-4 vision \\\nmodel.</p>\n<h3>NAT Traversal with Coturn</h3> \n<p>With WebRTC protocol, an important method to handle NAT traversal is to use ICE servers. \nThe AI Stream Commentator is set up with open source implementation of a TURN server called Coturn to handle VoIP media traffic. \nThis provides a stability to connections in various network environments.</p>	<h4>Github Link:</h4> \n<p><a href="https://github.com/Ai-riku/GPT-Live-Commentator">https://github.com/Ai-riku/GPT-Live-Commentator</a></p> \n<h4>Website Link:</h4> \n<p><a href="https://ai-commentary.streamlit.app">https://ai-commentary.streamlit.app</a></p>\n<h4>Date Created:</h4> \n<p>Nov 11, 2023</p>
2	https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png	Personal Website	https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png,\n        https://i.gyazo.com/e26ae68bbcc06b00b4af6c2b0b6cceb2.png,\n        https://i.gyazo.com/429cb1359e81a9c50f27871635187024.png	<h2>Attractive website using React</h2> \n\t\t<p>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</p> \n\t\t<h3>Vite Framework</h3> \n\t\t<p>Through learning frameworks like Vite, the potential to create higher quality products increases. That's why I am always open to learning new ideas to increase the quality of my code. \n\t\tAs well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</p>\n\t\t<h3>React Routing</h3> \n\t\t<p>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading. \n\t\tThrough using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</p> 	<h4>Github Link:</h4>\n\t\t<p><a href="https://github.com/fchui/personal-website">https://github.com/fchui/personal-website</a></p>\n\t\t<h4>Date Created:</h4>\n\t\t<p>Aug 23, 2023</p>
\.


--
-- TOC entry 4789 (class 0 OID 0)
-- Dependencies: 215
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: my_user
--

SELECT pg_catalog.setval('public.projects_id_seq', 1, false);


--
-- TOC entry 4636 (class 2606 OID 16412)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


-- Completed on 2024-03-07 11:17:39

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-03-07 11:17:39

--
-- PostgreSQL database cluster dump complete
--

