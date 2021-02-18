using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mvc.Models;
using System.Web.Http.Cors;

namespace mvc.Controllers
{
    
    public class MusicController : Controller
    {
        private readonly ILogger<MusicController> _logger;

       
        public MusicController(ILogger<MusicController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
         //[EnableCors("AllowEverything")]
        public IActionResult FirstSong()
        {
            return View();
        }
        public IActionResult SecondSong()
        {
            return View();
        }
        public IActionResult ThirdSong()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
