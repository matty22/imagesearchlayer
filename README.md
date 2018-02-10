# Image Search Layer

This Image Search Abstraction Layer application will take a search parameter at the /search endpoint in the URL and will return search results based on that parameter. You can also provide an offset on the end of your search to paginate the results.

If you navigate to the /latest endpoint, the application will return the most recent searches performed on the /search endpoint.

## To Use

Go to https://matty22imagesearchlayer.herokuapp.com/. You can navigate to the /latest endpoint to see the most recent searches. To search for images on a certain topic, search at the /search endpoint. For example, a URL like this: search/red%20pandas?offset=10 would return an object that looks like:

```
[
{
imageUrl: "http://www.bing.com/cr?IG=F8E90A850F304E70A333C92219263066&cuteredpandaphoto-2.jpg",
name: "Red Pandas at the Vilas Zoo | lukas keapproth",
pageUrl: "http://www.bing.com/crr=http%3a%2f%2fblog.lukaskeapproth.com%2f2012%2f01%2f10%2fred-pandas-at-the-vilas-zoo"
},
{
imageUrl: "http://www.bing.com/crr=http%3a%2f%2fwww.redorbit.com%2%2f2004%2f10%2f42_fe31.jpg",
name: "Red Panda - Redorbit",
pageUrl: "http://www.bing.com/crr=http%3a%2f%2fwww.redorbit.com%2fred_panda"
},
{
imageUrl: "http://www.bing.com/crr=http%3a%2f%2f4.bp.blogspot.com%2fred_panda_2.jpg",
name: "animal wildlife red panda the red panda is thought to be a subspecies ...",
pageUrl: "http://www.bing.com/crr=http%3a%2f%2fanimal-wildlife.blogspot.com%2f2011%2f09%2fred-panda.html"
}
] 
```

