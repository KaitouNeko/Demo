This repo contains the **bare minimum code** to have an auto-updating Electron app using [`electron-updater`](https://github.com/electron-userland/electron-builder/tree/master/packages/electron-updater) with releases stored on a plain HTTP server.

This example uses `localhost` as the release server.

1. For macOS, you will need a code-signing certificate.
    
    Install Xcode (from the App Store), then follow [these instructions](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6) to make sure you have a "Mac Developer" certificate.  If you'd like to export the certificate (for automated building, for instance) [you can](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW7).  You would then follow [these instructions](https://github.com/electron-userland/electron-builder/wiki/Code-Signing).

2. Install necessary dependencies with:

        yarn
   
   or
   
        npm install

3. Build your app with:

        node_modules/.bin/build --win --mac --x64 --ia32

4. Copy the files in the `dist/` directory to your webserver.  Here's how to do it on a Linux system:

        mkdir -p wwwroot
        cp dist/*.json wwwroot/
        cp dist/*.yml wwwroot/
        cp dist/mac/*.zip wwwroot/
        cp dist/mac/*.dmg wwwroot/
        cp dist/*.exe wwwroot/

5. Serve `wwwroot` over HTTP:

        node_modules/.bin/http-server wwwroot/ -p 8080

6. Download and install the app from <http://127.0.0.1:8080>

7. Update the version in `package.json`.

8. Do steps 3 and 4 again.

9. Open the installed version of the app and see that it updates itself.

