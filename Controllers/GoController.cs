using Microsoft.AspNetCore.Mvc;
using ShortUrl.Models;

namespace ShortUrl.Controllers
{
    public class GoController : Controller
    {
        UrlData data = new UrlData();  
   

        [HttpGet]  
        [Route("[Controller]/{id}")]  
        public void Details(string id)  
        {  
            var redir = data.GetUrlData(id).UrlOriginal;
            data.UpdateUrlCount(id);
            //Response.WriteAsync(redir);
            Response.Redirect(redir);

        }  
    }
}