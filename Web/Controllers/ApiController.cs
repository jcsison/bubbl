using System.Collections.Generic;
using bubbl.Data;
using bubbl.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace bubbl.Web.Controllers
{
    public class ApiController : Controller
    {
        private readonly IContentService contents;

        public ApiController(IContentService contents)
        {
            this.contents = contents;
        }

        [HttpPost("/api/AddContent")]
        public IActionResult AddContent([FromBody] Content content)
        {
            contents.Add(content);

            return Ok(new { success = true, returncode = "200" });
        }

        [HttpPut("/api/EditContent")]
        public IActionResult EditBubble([FromBody] Content content)
        {
            Content contentToUpdate = contents.GetById(content.Id);

            if (contentToUpdate == null) {
                return NotFound();
            }

            return Ok(new { success = true, returncode = "200" });
        }

        [HttpGet("/api/GetContents")]
        public IEnumerable<Content> GetContents()
        {
            return contents.GetAll();
        }
    }
}
