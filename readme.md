## React Dashboard in Horizon 


### Steps:

1. Create new dashboard as shown in openstack horizon documentation [openstack documentation](https://docs.openstack.org/horizon/latest/contributor/tutorials/dashboard.html)

2. Place Babel , React and React-Dom scripts files inside dashboard javascript statics folder .                                    
`<script src="{{STATIC_URL}}reactdashboard/js/react.development.js"></script>`             
`<script src="{{STATIC_URL}}reactdashboard/js/react-dom.development.js"></script>`         
`<script src="{{STATIC_URL}}reactdashboard/js/babel.min.js"></script>`                       

3. Add the React and React-Dom scripts to dashboard's index.html file .

3. Place the react root html element inside dashboard's index.html .

4. Clone the boilerplate repo and checkout to plugin branch 
`git clone https://github.com/e0ne/webpack-react-boilerplate.git`

5. yarn or npm install to install npm packages

6. Place your React App code inside the src folder .

7.  build and bundling your resources `npm run build`.

8. copy the output js file from the build folder into dashboard's js static folder and include it in dashboard's index.html .
`<script src="{{STATIC_URL}}reactdashboard/js/plugin.js"></script>`

9. restart your webserver .



