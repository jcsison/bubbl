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
                Description = result.Description,
                ImageUrl = result.ImageUrl,
                Location = result.Location,
                Tags = result.Tags,
                Type = result.Type,
                UploadDate = result.UploadDate,
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
                Description = content.Description,
                ImageUrl = content.ImageUrl,
                Location = content.Location,
                Tags = content.Tags,
                Type = content.Type,
                UploadDate = content.UploadDate,
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
                Description = result.Description,
                ImageUrl = result.ImageUrl,
                Location = result.Location,
                Tags = result.Tags,
                Type = result.Type,
                UploadDate = result.UploadDate,
                UserId = result.UserId
            }).ToList();

            ContentPostModel model = new ContentPostModel() { Contents = contentResults };

            return View(model);
        }


    }
}
