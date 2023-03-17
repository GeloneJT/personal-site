// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 0,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 0,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 0,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 0,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 0,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 0,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 0,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 0,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 0,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 0,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    competency: 0,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 0,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 0,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 0,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 0,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 0,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 0,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 0,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 0,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 0,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 0,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 0,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 0,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spark',
    competency: 0,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Dagster',
    competency: 0,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Mypy',
    competency: 0,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'C#',
    competency: 0,
    category: ['Languages'],
  },
  {
    title: 'Firebase',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Babel',
    competency: 2,
    category: ['Tools', 'Web Development', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Java', 'Languages'],
  },
  {
    title: 'Kotlin',
    competency: 4,
    category: ['Tools', 'Java'],
  },
  {
    title: 'SwiftUI',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Spring Boot',
    competency: 1,
    category: ['Tools', 'Java', 'Web Development'],
  },
  {
    title: 'Jenkins',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Selenium',
    competency: 2,
    category: ['Tools', 'Test Orchestration'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
