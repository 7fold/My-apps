using Microsoft.AspNetCore.Mvc;
using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;  
using Microsoft.AspNetCore.Mvc;  
using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.AspNetCore.Http;
using ShortUrl.Models;  
using Microsoft.AspNetCore.Http.Features;

namespace ShortUrl.Controllers
{
    public class ShortController : Controller
    {
        UrlData data = new UrlData();  

        [HttpGet]  
        [Route("api/[Controller]/Index")]
        public IEnumerable<Url> Index()  
        {  
            return data.GetAllUrls();  
        }  

        [HttpPost]  
        [Route("api/[Controller]/Create")]  
        public int Create(string id, string url, string ip)  
        {
            var baseUrl = Request.Scheme+"://"+Request.Host;
            return data.AddUrl(id, url, ip, baseUrl);  
        }  

        [HttpGet]  
        [Route("api/[Controller]/Details/{id}")]  
        public Url Details(string id)  
        {  
            return data.GetUrlData(id);  
        }  

        [HttpPut]  
        [Route("api/[Controller]/Count")]  
        public int Count(string id)  
        {  
            return data.UpdateUrlCount(id);  
        }  

        [HttpDelete]  
        [Route("api/[Controller]/Delete/{id}")]  
        public int Delete(string id)  
        {  
            return data.DeleteUrl(id);  
        }  
    }
}