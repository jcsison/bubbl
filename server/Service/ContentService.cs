using System.Collections.Generic;
using System.Linq;
using bubbl.Data;
using bubbl.Data.Models;

namespace bubbl.Service
{
    public class ContentService : IContentService
    {
        private bubblDbContext context;

        public ContentService(bubblDbContext context)
        {
            this.context = context;
        }

        public void Add(Content content)
        {
            context.Add(content);
            context.SaveChanges();
        }

        public IEnumerable<Content> GetAll()
        {
            return context.Contents;
        }

        public Content GetById(int id)
        {
            return context.Contents.FirstOrDefault(content => content.Id == id);
        }

        public string GetTitle(int id)
        {
            return GetById(id).Title;
        }

        public string GetDescription(int id)
        {
            return GetById(id).Description;
        }

        public string GetLocation(int id)
        {
            return GetById(id).Location;
        }

        public string GetTags(int id)
        {
            return GetById(id).Tags;
        }

        public string GetType(int id)
        {
            return GetById(id).Type;
        }

        public void Update(int id, Content content)
        {
            context.Update(content);
            context.SaveChanges();
        }
    }
}
