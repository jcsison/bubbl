using bubbl.Data;
using bubbl.Data.Models;
using bubbl.Web.Models;
using bubbl.Web.Models.Content;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace bubbl.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IContentService contents;

        public HomeController(IContentService contents)
        {
            this.contents = contents;
        }

        public IActionResult Index()
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
