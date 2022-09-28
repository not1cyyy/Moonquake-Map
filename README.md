# Objectives
Your challenge is to develop an app that plots the seismic events detected by the EASEP and ALSEP instruments on an interactive 3-D digital moon globe. How will you visualize this data? Will the seismic events appear as pins or flashing objects in the locations specified in the data files? Seismic events cause ringing — you could visualize them as concentric torus shapes or circles. Will you develop images within a project web page, pop-up boxes on a digital lunar globe, a display on an interactive 3-D virtual model embedded in a web page, or a virtual reality experience set on the lunar surface where seismic events shake the camera’s point-of-view? Be creative!

# Potential Considerations
When developing your project, you may (but are not required to) take the following into consideration:

- Remember that Space Apps judges cannot download executable files. The app you develop will run in a web browser, so the web page and associated code will be hosted on a server. (See the Resources tab)
- A possible plan of action to address this challenge could include the following steps:
    - Locate free code libraries for developing web apps that can present interactive 3-D models. (See the Resources tab)
    - After selecting a code library, create a web app that presents a sphere. The Resources tab at the top of the page provides a link to the NASA Scientific Visualization Studio, which provides images of the Moon in various sizes. On that web page, select a small size, such as 135 KB or 3.2 MB, from the Download Options drop down list. Map the image of the Moon on the sphere to create a Lunar globe.
    - Use the links provided by the Resources tab at the top of the page to access a directory of Comma Separated Value (CSV) files containing the moonquake data and a document that describes the moonquake catalog data format. The CSV files contain the date, time, latitude, and longitude. A few of the CSV files also contain magnitudes while others contain depths.
- More advanced teams can consider plotting time-series data of moonquakes

**You can find additional resources by conducting internet searches like the following:**

- You can obtain information on free web hosting services, by conducting an Internet search using terms such as: code repositories, cloud platforms, free hosting, and free web hosting sites. Research the repository that your team is using to ensure it offers web hosting. As an example, try searching for the repository name and “pages” or “web pages.” So if “foo” was the name of the repository, then try searching for “foo pages” or “foo web pages.”
- Use your favorite web search engine to find web graphics language code libraries. The WebGL standard enables web browsers to present 3D models. Search for “Open Source WebGL Frameworks.”
- Free open source Python toolkits are available to process Apollo seismic data. Search for “Python framework for processing seismology data” without the quotes to find a toolkit, and search for the modules within that toolkit that can process Apollo seismic data. To find information about free open source Python toolkits for seismology, review the following technical paper provided via the Resources tab at the top of the page: “Cluster Analysis of Thermal Icequakes using the Seismometer to Investigate Ice and Ocean Structure (SIIOS): Implications for Ocean World Seismology.”
- You can use your favorite web search engine to find helpful articles. Key words might include:
    - Apollo Seismic Data Analysis in Python
    - ObsPy Module and REsponse Function
    - Lunar and Planetary Science Conference

# Resources
NASA RESOURCES
NASA Apollo 11 Passive Seismic Experiment (part of EASEP package)
Description of a Passive Seismic Experiment (PSE) type

Full Apollo EASEP and ALSEP descriptions
Look for all mentions of the "Passive Seismic Experiment."

NASA's Planetary Data System (PDS)
On NASA's Planetary Data System (PDS) website, click on the link in the “SEARCH/ACCESS DATA” field to access a record for the “Apollo Passive Seismic Experiment Expanded Event Catalog Online.” A web page from the PDS Geosciences Node will appear; you can click on the link in the “Data collection” field to arrive at a directory that contains the data files. For documentation, click on the link in the “Document collection field” on the PDS Geosciences Node web page. In the documentation directory, read the file named “moonquake_catalog_desc.pdf.

Scientific Visualization Studio Computer Generated Imagery (CGI) Moon Kit
A.G. Marusiak, et al., “Cluster Analysis Of Thermal Icequakes Using The Seismometer To Investigate Ice And Ocean Structure (Siios): Implications For Ocean World Seismology,” 2020.
Yosio Nakamura, “Catalog of Lunar Seismic Data from Apollo Passive Seismic Experiment on 8-mm Video Cassette (Exabyte) Tapes,” June 30, 1992:
JAPAN AEROSPACE EXPLORATION AGENCY (JAXA)
Passive Seismic Observation Data, Data ARchives and Transmission System (DARTS) Lunar and Planetary Science
Exabyte Tape Data Format, DARTS Lunar and Planetary Science


# Technologies used:
- [Three.js](https://threejs.org/)