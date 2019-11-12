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
        public IActionResult AddContent([FromBody] Content content) {
            contents.Add(content);

            return Ok(new { success = true, returncode = "200" });
        }
    }
}
