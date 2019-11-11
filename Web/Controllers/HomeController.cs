using bubbl.Data;
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
            IEnumerable<Data.Models.Content> contentModels = contents.GetAll();

            List<ContentModel> contentResults = contentModels.Select(result => new ContentModel
            {
                Id = result.Id,
                Description = result.Description,
                ImageUrl = result.ImageUrl,
                Location = result.Location,
                Tags = result.Tags,
                Title = result.Title,
                Type = result.Type,
                UploadDate = result.UploadDate,
                UserId = result.UserId
            }).ToList();

            ContentPostModel model = new ContentPostModel() { Contents = contentResults };

            return View(model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
