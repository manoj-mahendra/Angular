using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PartB.Models.Registration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using PartB.Models.Glossary;
using System.Net;

namespace PartB.Controllers
{
    public class GlossaryController : JsonController
    {
        private readonly RegistrationvmBuilder _registrationvmBuilder = new RegistrationvmBuilder();

        public ActionResult Index()
        {
            return Json(_registrationvmBuilder.GetGlossaryVms(), JsonRequestBehavior.AllowGet);
        }
    }
}