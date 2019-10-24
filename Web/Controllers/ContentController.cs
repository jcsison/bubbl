using bubbl.Data;
using bubbl.Web.Models.Content;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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
            IEnumerable<Data.Models.Content> contentModels = contents.GetAll();

            List<ContentModel> contentResults = contentModels.Select(result => new ContentModel
            {
                Id = result.Id,
                UploadDate = result.UploadDate,
                Type = result.Type,
                Location = result.Location,
                Description = result.Description,
                ImageUrl = result.ImageUrl,
                UserId = result.UserId
            }).ToList();

            ContentPostModel model = new ContentPostModel() { Contents = contentResults };

            return View(model);
        }

        public IActionResult Detail(int id)
        {
            Data.Models.Content content = contents.GetById(id);

            ContentDetailModel model = new ContentDetailModel
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
        public IActionResult Timeline()
        {
            IEnumerable<Data.Models.Content> contentModels = contents.GetAll();

            List<ContentModel> contentResults = contentModels.Select(result => new ContentModel
            {
                Id = result.Id,
                UploadDate = result.UploadDate,
                Type = result.Type,
                Location = result.Location,
                Description = result.Description,
                ImageUrl = result.ImageUrl,
                UserId = result.UserId
            }).ToList();

            ContentPostModel model = new ContentPostModel() { Contents = contentResults };

            return View(model);
        }


    }
}
