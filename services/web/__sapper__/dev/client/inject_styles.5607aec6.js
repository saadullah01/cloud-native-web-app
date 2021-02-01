function inject_styles(files) {
  return Promise.all(
    files.map(function (file) {
      return new Promise(function (fulfil, reject) {
        var href = new URL(file, import.meta.url);
        var baseURI = document.baseURI;

        if (!baseURI) {
          var baseTags = document.getElementsByTagName("base");
          baseURI = baseTags.length ? baseTags[0].href : document.URL;
        }

        var relative = ("" + href).substring(baseURI.length);
        var link =
          document.querySelector(
            'link[rel=stylesheet][href="' + relative + '"]'
          ) ||
          document.querySelector('link[rel=stylesheet][href="' + href + '"]');
        if (!link) {
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = href;
          document.head.appendChild(link);
        }
        if (link.sheet) {
          fulfil();
        } else {
          link.onload = function () {
            return fulfil();
          };
          link.onerror = reject;
        }
      });
    })
  );
}

export default inject_styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0X3N0eWxlcy41NjA3YWVjNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vaW5qZWN0X3N0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmaWxlcykge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoZmlsZXMubWFwKGZ1bmN0aW9uKGZpbGUpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGZ1bGZpbCwgcmVqZWN0KSB7XG5cdFx0dmFyIGhyZWYgPSBuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCk7XG5cdFx0dmFyIGJhc2VVUkkgPSBkb2N1bWVudC5iYXNlVVJJO1xuXG5cdFx0aWYgKCFiYXNlVVJJKSB7XG5cdFx0XHR2YXIgYmFzZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpO1xuXHRcdFx0YmFzZVVSSSA9IGJhc2VUYWdzLmxlbmd0aCA/IGJhc2VUYWdzWzBdLmhyZWYgOiBkb2N1bWVudC5VUkw7XG5cdFx0fVxuXG5cdFx0dmFyIHJlbGF0aXZlID0gKCcnICsgaHJlZikuc3Vic3RyaW5nKGJhc2VVUkkubGVuZ3RoKTtcblx0XHR2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWY9XCInICsgcmVsYXRpdmUgKyAnXCJdJylcblx0XHRcdHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWY9XCInICsgaHJlZiArICdcIl0nKTtcblx0XHRpZiAoIWxpbmspIHtcblx0XHRcdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cdFx0XHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0Jztcblx0XHRcdGxpbmsuaHJlZiA9IGhyZWY7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdH1cblx0XHRpZiAobGluay5zaGVldCkge1xuXHRcdFx0ZnVsZmlsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7IHJldHVybiBmdWxmaWwoKSB9O1xuXHRcdFx0bGluay5vbmVycm9yID0gcmVqZWN0O1xuXHRcdH1cblx0fSl9KSk7XG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBZSxzQkFBUSxDQUFDLEtBQUssRUFBRTtBQUMvQixDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDM0YsRUFBRSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxFQUFFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDakM7QUFDQSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsR0FBRyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDL0QsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxFQUFFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNwRixNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNiLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUMzQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2xCLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDWixHQUFHLE1BQU07QUFDVCxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLEVBQUUsQ0FBQztBQUNoRCxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ3pCLEdBQUc7QUFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNQOzs7OyJ9
