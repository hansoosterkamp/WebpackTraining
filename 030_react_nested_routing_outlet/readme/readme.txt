This template uses

- react
- webpack, webpack cli
- style loading (as inline style)
- typescript, babel tsx
- asset loader
- @types for react and react-dom
- react-router-dom

scripts:

to build:
>npm run build 

to build and watch:
>npm run watch


The react routing manages the history API fo the browser to show different components
on different urls.
We need to install router packages as dev dependencies
>npm install react-router-dom


To tell IIS (Express) to use client side routing the web.config should be changed:

<configuration>
....
<system.webServer>
    <rewrite>
      <rules>
        <rule name="ReactRouter Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          </conditions>
          <action type="Rewrite" url="dist/index.html" />
        </rule>
      </rules>
    </rewrite>
</system.webServer>
.....

</configuration>
