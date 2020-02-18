module.exports = function (grunt){
  grunt.initConfig({
    aws: grunt.file.readJSON( 'aws-keys.json' ),
    aws_s3: {
        options: {
            accessKeyId: '<%= aws.AWSAccessKeyId %>',
            secretAccessKey: '<%= aws.AWSSecretKey %>'
        },
        dist: {
            options: {
                bucket: 'taktaktaka-rpt18-fec-cygnus'
            },
            files: [
              {
                  expand: true,
                  cwd: 'public/dist/',
                  src: [ '**' ],
                  dest: '/proxy/dist'
              }
            ]
        }
    }
  });

  //aws_s3:dist task won't be found if loadNpmTasks is not run
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask( 'deploy', 'aws_s3:dist' );
}