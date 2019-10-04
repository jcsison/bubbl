using bubbl.Data.Models;
using System.Collections.Generic;

namespace bubbl.Data
{
    public interface IContentService
    {
        IEnumerable<Content> GetAll();

        Content GetById(int id);

        void Add(Content content);

        string GetType(int id);

        string GetLocation(int id);

        string GetDescription(int id);
    }
}
