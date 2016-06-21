var scripts = document.getElementsByTagName('script');
[].slice.call(scripts, 0).forEach(function(ele) {
    console.log(ele.readyState);
})
