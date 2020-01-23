process.env.BROWSER = 'none';

module.exports = {
    plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
    reactScriptsPath: 'react-scripts',
};
