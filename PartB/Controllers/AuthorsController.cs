using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PartB.Models.Glossary;

namespace PartB.Controllers
{
    public class AuthorsController : Controller
    {
        [HttpPost]
        public ActionResult Save(GlossaryVm glossary)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [HttpPost]
        public ActionResult Delete(GlossaryVm glossary)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}