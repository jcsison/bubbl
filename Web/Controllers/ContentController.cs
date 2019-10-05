using bubbl.Data;
using bubbl.Web.Models.Content;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace bubbl.Web.Controllers
{
    public class ContentController : Controller
    {
        private readonly IContentService contents;

        public ContentController(IContentService contents)
        {
            this.contents = contents;
        }

        public IActionResult Index()
        {
            var contentModels = contents.GetAll();

            var contentResults = contentModels.Select(result => new ContentModel
            {
                Id = result.Id,
                UploadDate = result.UploadDate,
                Type = contents.GetType(result.Id),
                Location = contents.GetLocation(result.Id),
                Description = contents.GetDescription(result.Id),
                ImageUrl = result.ImageUrl,
                UserId = result.UserId
            }).ToList();

            var model = new ContentPostModel() { Contents = contentResults };

            return View(model);
        }

        public IActionResult Detail(int id)
        {
            var content = contents.GetById(id);

            var model = new ContentDetailModel
            {
                Id = id,
                UploadDate = content.UploadDate,
                Type = content.Type,
                Location = content.Location,
                Description = content.Description,
                ImageUrl = content.ImageUrl,
                UserId = content.UserId
            };

            return View(model);
        }
    }
}
