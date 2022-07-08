module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Preetham Reddy Pathi',
    // Main Site Title
    title: `Preetham Pathi | Machine Learning Developer`,
    // Description that goes under your name in main bio
    description: `Well Organized entry-level professional pursing Masters in Data Science at University of San Francisco seeking a job to continue growth into Machine Learning.`,
    // Optional: Twitter account handle
    author: `@PathiPreetham`,
    // Optional: Github account URL
    github: `https://github.com/preethampathi2305`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/preetham-reddy-pathi-15349b11b/`,
    // Content of the About Me section
    about: `Entry-level Machine Learning and Data Science Engineer with projects to prove. Interned at Butterflies Dating and Socials and General Electric. Bachelors in Computer Science from VIT, Vellore. Currently pursuing a Masters in Data Science from University of San Francisco.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'BRUSHED - AI TOOL FOR STYLE TRANSFER',
        description:
          'Developed and deployed a web application for style transfer.',
        link: 'https://style-transfer-007.herokuapp.com/',
      },
      {
        name: 'GRADIENT DESCENT IMPLEMENTATION IN PYTHON',
        description:
          'Implemented gradient descent for Linear and Logistic regression with NumPy in Python. Implemented Linear, Logistic Regression, Naïve Bayes, Support Vector Machines, Neural Network algorithms from scratch in Python.',
        link: 'https://github.com/preethampathi2305/gradient-descent-in-linear-regression',
      },
      {
        name: 'FACE DETECTION USING OPENCV AND RECOGNITION USING KNN FROM SCRATCH',
        description:
          'Face detection using the HaarCascade model from OpenCV and classifying the faces using KNN classification algorithm which was implemented from scratch (using NumPy). ',
        link: 'https://github.com/preethampathi2305/face-recognition-using-knn',
      },
      {
        name: 'MARKS PREDICTION DEPLOYED WITH FLASK',
        description:
          'Developed a small ML model to predict marks depending on the number of hours the student studies and used flask to make it into a web-app.',
        link: 'https://marks-prediction-with-lr.herokuapp.com/',
      },
      {
        name: 'MOVIE REVIEW CLASSIFICATION USIGN NLTK AND NAIVE BAYES',
        description:
          'Developed a movie review classification using naive bayes. Useful for getting feedback for a movie from social media comments.',
        link: 'https://github.com/preethampathi2305/movie-review-classification-using-nltk-and-naive-bayes',
      },
      {
        name: 'BOOK STORE SCRAPED WITH SCRAPY',
        description:
          'Scraping all the image URLs ,Book titles and prices of all the books from an online book store.',
        link: 'https://github.com/preethampathi2305/Scrape-online-book-store-with-Scrapy',
      },
      {
        name: '(PUBLICATION) GLASSES FOR SMART TOURISM APPLICATIONS',
        description:
          'Published a Research Paper in the Computer Vision Recognition Systems Using Machine and Deep Learning Approaches (CVRS MDA 2021) Book chapter. Publication: IET. The paper proposes a smart glasses software for tourism applications like text extraction and translation, Face recognition Navigation, Text to speech using Kaldi Voice Recognition toolkit. Accepted and will be published when the chapter gets published.',
        link: 'https://shop.theiet.org/computer-vision-and-recognition-systems-using-machine-and-deep-learning-approaches',
      },
      {
        name: '(PUBLICATION) TOOL SEGMENTATION AND IMAGE ENHANCEMENT FOR LAPAROSCOPIC SURGERY',
        description:
          'In laparoscopic surgeries, as the doctor will see the feed from a small camera the view may not be perfect due to many issues like hazing, reflections, etc. To tackle those problems and give clear vision to the doctor, we have developed a model which de-hazes feed, handles glare issues, segments the surgical tools with machine learning image segmentation, all with voice recognition as the doctor may not have his hands empty to operate the computer.',
        link: 'https://ieeexplore.ieee.org/document/9696600',
      },
      {
        name: '(PUBLICATION) CONTENT BASED IMAGE RETRIEVAL USING K-MEANS CLUSTERING AND IMAGE LABEL COMPARISION',
        description:
          'A novel method for content-based image retrieval problem where we first cluster the dataset with the features extracted from images and assign tags to each cluster. We then generate tags for each input image and compare the tags between them. This process takes very little time and processing power as we’re just comparing tags and not images themselves.',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-05767-0_18',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'General Electric',
        description: 'Data Analytics Intern, January 2022 - June 2022',
        link: 'https://www.ge.com/',
      },
      {
        name: 'Butterflies Dating and Socials',
        description: 'Machine Learning Intern, April 2021 - August 2021',
        link: 'https://butterflies.live/',
      },
      {
        name: 'ISRO: Coastal Zone Change Detection and Monitoring',
        description: 'Worked on Speckle Noise Reduction in SAR Images using Neuro-Fuzzy approaches for Coastal Zone Change Detection and Monitoring under Dr. V. Santhi where I was part of Satellite Images rendering and visualizing team. , June 2021 - July 2021',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python , Java, TensorFlow, PyTorch, Scikit Learn, R, Matlab, C/C++, HTML,CSS,JS, SQL',
      },
      {
        name: 'Machine Learning',
        description: 'Neural Networks, Convolution Neural Networks, Recurrent Neural Network, Support Vector Machine, Natural Language Processing, Long Short Term Memory (LSTM), Generative Adversarial Networks, Feature Selection and Extraction, Transformers (GPT)',
      },
      {
        name: 'Other',
        description:
          'Flask, Heroku Deployment , CI / CD, UI development with Tkinter (Python), API design, Tableau',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
