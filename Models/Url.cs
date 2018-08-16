using System;

namespace ShortUrl.Models
{
    public class Url
    {
        public string Id { get; set; }  
  
        public string UrlOriginal { get; set; }  
  
        public string UrlShort { get; set; }  

        public DateTime Date { get; set; }  
  
        public string Ip { get; set; }  
  
        public int Count { get; set; }  
    }
}