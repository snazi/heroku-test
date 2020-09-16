const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');



module.exports = withFonts(withCSS(withSass({
   enableSvg: true,
   webpack(config, {isServer}) {

    const globalSass = [
      './components/common/styles/shared/_colors.scss',
    ];

    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: globalSass,
      }
    });
 
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
        }
        
    });

    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
     return config;
   }
 }
))); 
