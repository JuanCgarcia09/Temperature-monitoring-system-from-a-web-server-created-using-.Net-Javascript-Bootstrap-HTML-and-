using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using lab_final.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lab_final.Controllers
{
    public class LoginController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult validar([FromBody] Contrasena contra)
        {
            SqlCommand cmd = new SqlCommand("SELECT * FROM Contrasena", datos);
            cmd.CommandType = CommandType.Text;
            datos.Open();
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                if (contra.contrasena == reader.GetString(0))
                {
                    datos.Close();
                    HttpContext.Session.SetString("usuario", "OK");
                    return Json(1111);
                }
            }

                datos.Close();
                return Json(2222);
            
        }
    }
}
