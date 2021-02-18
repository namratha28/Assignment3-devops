using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Dotnet_webapi;

namespace jukebox.webapi.Controllers
{
    [ApiController]
    //[Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private readonly ILogger<MusicController> _logger;
        public Music myMusic=new Music();

        public MusicController(ILogger<MusicController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        [Route("[controller]")]
        public String Get()
        {
            return "<h1>My jukebox</h1>";
        }

        [HttpGet]
        [Route("[controller]/FirstSong")]
        public String GetFirstSong()
        {
            return myMusic.FirstSong;
        }
         [HttpGet]
        [Route("[controller]/SecondSong")]
        public String GetSecondSong()
        {
            return myMusic.SecondSong;
        }
         [HttpGet]
        [Route("[controller]/ThirdSong")]
        public String GetThirdSong()
        {
            return myMusic.ThirdSong;
        }
    }
}
