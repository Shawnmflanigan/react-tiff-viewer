# React Tiff Viewer

A simple react tiff viewer component for displaying, zooming, pinching, and scrolling .tiff files.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

After forking into your local environment `npm i` will install all dependancies.

`npm run start` will open the app on your default browser at `localhost:3000`

## Notable Dependancies

-[UTIF](https://www.npmjs.com/package/utif) handles decoding tiff images.

-[Konva](https://www.npmjs.com/package/react-konva) is able to display the newly decoded images.

-[Zoom-Pan-Pinch](https://www.npmjs.com/package/react-zoom-pan-pinch) is a simple react component for container interactions.

All dependancies are stable, with high weekly downloads, and regular commits.

## Considerations

-There are a variety of options for displaying .tiff files but very few that do not require using a third-party, paid, service. In building this application I tested [tiff.js](https://github.com/seikichi/tiff.js/blob/master/README.md) as well as [tiff](https://www.npmjs.com/package/tiff) with varying degrees of success. UTIF was more stable (read: not abandoned) and was more React friendly and so, in the end, I decided on UTIF for tiff file decoding.

-The same can be said for both tiff file display as well as image interactions. I opted for Konva and Zoom-Pan-Pinch for much the same reasons as I did UTIF.

-I'm aware this is ugly and would love to spend some more time styling it beyond just some basic bootstrap.

-Currently this is not very mobile friendly and is best viewed full page in the desktop. I would like to fix that.

-Additionally, there seems to be some issues with the quality of the image when zooming in. I would like to fix that as well.

-If you wish to change the .tiff you are using upload to `src/Images` and change the `tiffImage` variable in `src/Components/TiffDisplay`. I would like to add some functionality for uploading and selecting different documents.
