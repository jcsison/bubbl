﻿using bubbl.Data.Models;
using System.Collections.Generic;

namespace bubbl.Data
{
    public interface IContentService
    {
        IEnumerable<Content> GetAll();

        Content GetById(int id);

        void Add(Content content);

        string GetDescription(int id);

        string GetTitle(int id);

        string GetLocation(int id);

        string GetTags(int id);

        string GetType(int id);

        void Update(int id, Content content);
    }
}
