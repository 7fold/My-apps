using System;
using Google.Protobuf.WellKnownTypes;
using Microsoft.AspNetCore.Mvc;

namespace ShortUrl.Controllers
{
    public class TimeController : Controller
    {
        [HttpGet]
        [Route("api/[Controller]")]

        public JsonResult Info(int ?date)
        {
            if (date.HasValue)
            {
                DateTime unixStart = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
                long unixTimeStampInTicks = (long) (date * TimeSpan.TicksPerSecond);
                var newdate = new DateTime(unixStart.Ticks + unixTimeStampInTicks, DateTimeKind.Utc);
                
                var jsonDate = new {unix = date, utc = newdate};
                return Json(jsonDate);
            }
            else
            {
                var jsonDate = new {unix = DateTime.UtcNow.ToTimestamp().Seconds, utc = DateTime.UtcNow};
                return Json(jsonDate);
            }
        }
    }
}