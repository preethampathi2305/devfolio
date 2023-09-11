module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Preetham Pathi',
    // Main Site Title
    title: `Preetham Pathi | Data Scientist`,
    // Description that goes under your name in main bio
    description: `Well Organized data science professional with a Masters in Data Science from University of San Francisco seeking a job to continue growth into Machine Learning.`,
    // Optional: Twitter account handle
    author: `@PathiPreetham`,
    // Optional: Github account URL
    github: `https://github.com/preethampathi2305`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/preethampathi/`,
    // Content of the About Me section
    about: `Machine Learning and Data Science Engineer with experience to prove. \n\
    Worked at Butterflies Dating and Socials, General Electric and Propeller Health (ResMed). \n\
    Bachelors in Computer Science from VIT University. \n\
    Masters in Data Science from University of San Francisco.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'LinkedIn Alumni Profile Similarity',
        description:
          'Executed an ETL process using AirFlow to extract alumni data from GCP, transformed via PySpark, and loaded into MongoDB Atlas. Leveraged BERT for sentence embeddings to gauge profile similarities in Databricks.',
        link: 'https://github.com/MohanaMeher/alumni_profile_matching',
      },
      {
        name: 'Image Captioning on Flickr-8k Dataset',
        description:
          'Built an Image Captioning model trained on the Flickr-8k dataset using PyTorch for an attention based Sequence 2 Sequence model which outputs what\'s happening in a given image.',
        link: '',
      },
      {
        name: 'Apple Support Chatbot using Twitter Customer Support Data',
        description:
          'Developed an Apple Support Chatbot utilizing Twitter customer support data, leveraging an attention-based sequence-to-sequence (seq2seq) model to provide automated assistance and solutions to user queries.',
        link: '',
      },
      {
        name: 'Default Prediction using American Express Dataset',
        description:
          'Successfully implemented a default prediction model using the American Express dataset, leveraging Apache Spark to handle 15 million rows of data, resulting in accurate risk assessment and informed decision-making.',
        link: 'https://github.com/preethampathi2305/amex-default-prediction',
      },
      {
        name: 'Windmill Power Forecasting',
        description:
          'Prototyped multiple time series forecasting models like Prophet, SARIMAX, VAR and ETS to predict the generation of a windmill.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Vee',
        description: 'Cloud Engineer, August 2023 - Present',
        link: 'https://www.letsvee.com/',
      },
      {
        name: 'Propeller Health (ResMed)',
        description: 'Data Scientist, October 2022 - July 2023\n\
        - Developed and implemented an Isolation Forest model and a distance based algorithm to enhance the quality and consistency of patient drug intake data by accurately detecting anomalies on 200M rows of data, utilizing Apache Spark for efficient data transformation.\n\
        - Utilized the RandomizedSearch technique to create a robust XGBoost regression model on Amazon SageMaker and Redshift to accurately predict the likelihood of patients taking rescue inhaler puffs.\n\
        - As an intern, I generated interactive Tableau dashboards to analyze user behavior in an Electronic Health Record (EHR) platform.\n\
        - Utilized PostgreSQL for efficient data storage and retrieval, ensuring data integrity and accessibility throughout the project.\n\
        - Collaborated with cross-functional teams including data engineers and healthcare professionals to gather requirements, design and deploy data pipelines.',
        link: 'https://propellerhealth.com/',
      },
      {
        name: 'General Electric Steam Power',
        description: 'Data Analyst, January 2022 - June 2022\n- Conducted an in-depth word frequency analysis on an imbalanced dataset and applied advanced feature engineering techniques to \
        enhance the quality of the data and developed a highly accurate Random Forest model to predict the Parts Qualification Level for turbine \
        components, achieving an accuracy rate of 97.3%.\n\
        - Engineered and implemented a streamlined model pipeline that incorporated the aforementioned Random Forest model. This automated \
        pipeline can have an estimated reduction of workload of field engineers by 20%.\n\
        - Leveraged a diverse technology stack, including PostgreSQL, Tableau, and machine learning to address real-time business needs.',
        link: 'https://www.ge.com/steam-power',
      },
      {
        name: 'Butterflies Dating and Socials',
        description: 'Software Development Engineer, April 2021 - December 2021\n\
        - As a part of the Machine Learning team at Butterflies Dating, I developed a transformer-based profile matching algorithm using \
        PyTorch. This algorithm significantly improved the accuracy and efficiency of matching user profiles within the application.\n\
        - Built a DistilBERT model that achieved an impressive accuracy rate of 98% in detecting and flagging toxic chats. This model played a crucial \
        role in maintaining a safe and respectful environment within the app.\n\
        - Conducted A/B testing with the identified KPIs to evaluate the effectiveness of different algorithms and model variations, leading to \
        data-driven decision-making and improved algorithm performance.\n\
        - Actively participated in code reviews and knowledge sharing sessions, contributing to a collaborative and innovative work environment.',
        link: 'https://www.crunchbase.com/organization/butterflies-dating-socials',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C, C++, Java, R, PyTorch, Keras, HTML, CSS, Git, Tableau, PowerBI, Looker, Django',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, Oracle (PL/SQL),SQL Server, T-SQL, MySQL, PrestoDB, Cassandra',
      },
      {
        name: 'Data Engineering',
        description: 'Spark (PySpark, SparkSQL, SparkML), RAPIDS cuDF, Kafka, Hadoop, Hive, Snowflake, dbt, Databricks',
      },
      {
        name: 'Cloud',
        description: 'AWS (EC2, S3, SageMaker, Redshift, Lambda, Glue, Athena), GCP (Compute, Buckets, BigQuery), Microsoft Azure',
      },
      {
        name: 'Data Science',
        description: 'Regression, Gradient Boosting, Time Series Analysis (ARIMA, VAR, Prophet), NumPy, SciPy, A/B Testing, SHAP, Recommendation Engines, Customer Segmentation',
      },
      {
        name: 'Machine Learning',
        description: 'Neural Networks, CNN, RNN, LSTM, Transformers (GPT), Generative AI, Prompt Engineering, ChatGPT API, LangChain',
      },
      {
        name: 'ML Ops',
        description: 'MLFlow, DVC, MetaFlow ,AirFlow, Git, Kubernetes, Docker, Prefect, DeepChecks, EvidentlyAI, Alibi Detect',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD, Microservices, API design, Agile / Scrum',
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
