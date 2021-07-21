import "./static/Resources.css";
import ResourcesIcon from "../../images/recursos_icon.png";
import { Accordion, Card } from "react-bootstrap";

function OpenLink(props) {
  return (
    <a href=":;" onClick={() => window.open(props.link, "_blank")}>
      <strong> </strong>
      {props.link}
    </a>
  );
}

export default function Resources() {
  return (
    <div
      className="container w-60"
      style={{ background: "#fafafa !important" }}
    >
      <div className="titles d-flex" style={{ maxWidth: "60%" }}>
        <img src={ResourcesIcon} alt="#" />
        <h2 className="icon-title">Recursos</h2>
      </div>
      <p className="resources-text">
        <strong>
          *Los siguientes enlaces son externos a la Universidad Tecmilenio, al
          acceder a ellos considera que debes apegarte a sus términos y
          condiciones.
        </strong>
      </p>
      <div className="row">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" eventKey="0">
                <strong>Videos</strong>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Para saber más sobre
                  <strong> data science</strong>, te invitamos a ver los
                  siguientes videos:
                </p>
                <ul>
                  <li>
                    TEDx Talks. (2015, 22 de julio).
                    <em>
                      Data Science at Work | Peter Grindrod | TEDxNewcastle{" "}
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=mH4mjF9ONy8"}
                    />
                  </li>
                  <li>
                    TEDx Talks. (2017, 19 de mayo).
                    <em>
                      We're All Data Scientists | Rebecca Nugent | TEDxCMU
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=YMnqPTLoj7o"}
                    />
                  </li>
                  <li>
                    freeCodeCamp.org. (2019, 30 de mayo).
                    <em>
                      Learn Data Science Tutorial - Full Course for Beginners
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=ua-CiDNNj30"}
                    />
                  </li>
                  <li>
                    UpDegree. (2019, 10 de enero).
                    <em>
                      Learn Data Science Today - Data Science Tutorial for
                      Beginners 2020!
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/2QA2asi"} />
                  </li>
                  <li>
                    TEDx Talks. (2018, 28 de marzo).
                    <em>
                      World Changing: Data Science and AI | Fred Blackburn
                      |TEDxWakeForestU{" "}
                    </em>
                    <OpenLink link={"https://bit.ly/2Xu9Xcl"} />
                  </li>
                  <li>
                    IBM Analytics. (2018, 25 de julio).
                    <em>How Can Data Science Drive Business Value? </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={
                        "https://www.youtube.com/watch?time_continue=4&v=oFh2GiWgF8k"
                      }
                    />
                  </li>
                  <li>
                    Microsoft Developer. (2019, 16 de septiembre).
                    <em>
                      Programming with Python | Python for Beginners [1 of 44]{" "}
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/335mLqE"} />
                  </li>
                  <li>
                    Talk Python Training Course. (s.f.).
                    <em>#100DaysOfCode in Python</em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/335mLqE"} />
                  </li>
                  <li>
                    Fazt. (2019, 22 de enero).
                    <em>Curso Python para Principiantes</em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=chPhlsHoEPo"}
                    />
                  </li>
                  <li>
                    Programming with Mosh. (2019, 18 de febrero).
                    <em>
                      Python Tutorial for Beginners [Full Course] Learn Python
                      for Web Development
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/3341Fcj"} />
                  </li>
                </ul>
                <p>
                  Para saber más sobre
                  <strong> Python y Pandas</strong>, te invitamos a ver el
                  siguiente video:
                </p>
                <ul>
                  <li>
                    edureka! (2017, 19 de mayo).
                    <em>
                      Python For Data Analysis | Python Pandas Tutorial | Learn
                      Python | Python Training | Edureka{" "}
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/2O3UNri"} />
                  </li>
                </ul>
                <p>
                  Para saber más sobre
                  <strong> NumPy</strong>, te invitamos a ver los siguientes
                  videos:
                </p>
                <ul>
                  <li>
                    Simplilearn. (2018, 14 de noviembre).
                    <em>
                      NumPy Tutorial Part - 1 | NumPy Array | Python NumPy
                      Tutorial Part -1| Python Tutorial | Simplilearn{" "}
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/347ovBl"} />
                  </li>
                  <li>
                    Udacity. (2016, 6 de junio).
                    <em> What is NumPy</em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=Tkv45wgxlEU"}
                    />
                  </li>
                </ul>
                <p>
                  Para saber más sobre
                  <strong> Pandas</strong>, te invitamos a ver los siguientes
                  videos:
                </p>
                <ul>
                  <li>
                    Keith Galli. (2018, 25 de octubre).
                    <em>
                      Complete Python Pandas Data Science Tutorial! (Reading
                      CSV/Excel files, Sorting, Filtering, Groupby)
                    </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink link={"https://bit.ly/3462TW1"} />
                  </li>
                  <li>codebasics. (2017, 21 de enero). </li>
                  <em> Python Pandas Tutorial 1. </em>
                  <em> What is Pandas python? Introduction and Installation</em>
                  [Archivo de video]. Recuperado de
                  <OpenLink link={"https://bit.ly/3379Lkr"} />
                  <li>Simplilearn. (2018, 22 de noviembre). </li>
                  <em>
                    {" "}
                    Python Pandas Tutorial | Pandas For Data Analysis | Python
                    Pandas | Python Tutorial | Simplilearn{" "}
                  </em>
                  [Archivo de video]. Recuperado de
                  <OpenLink link={"https://bit.ly/2KJeimP"} />
                  <li>
                    Udacity. (2015, 23 de febrero).
                    <em> Pandas - Intro to Data Science </em>
                    [Archivo de video]. Recuperado de
                    <OpenLink
                      link={"https://www.youtube.com/watch?v=TOVzHNbKUrE"}
                    />
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div style={{ height: "1.5rem" }}></div>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" eventKey="1">
                <strong>Lecturas</strong>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Para saber más sobre
                  <strong> data science</strong>, te invitamos a leer lo
                  siguiente:
                </p>
                <ul>
                  <li>
                    DataFlair. (s.f.).
                    <em> Start Learning Data Science. </em>
                    Recuperado de
                    <OpenLink link={"https://bit.ly/37m6AZJ"} />
                  </li>
                  <li>
                    Sharma, H. (2019).
                    <em>
                      What Is Data Science? A Beginner's Guide To Data Science
                    </em>
                    . Recuperado de
                    <OpenLink link={"https://bit.ly/2OqoqC6"} />
                  </li>
                  <li>
                    Kavas, I. (2019).
                    <em> The Birth Of The Data Science Generation</em>
                    .Recuperado de
                    <OpenLink link={"https://bit.ly/35i2Zd6"} />
                  </li>
                  <li>
                    DataCamp. (s.f.).
                    <em> Learn Data Science Online</em>. Recuperado de
                    <OpenLink link={"https://bit.ly/32XsgYt"} />
                  </li>
                </ul>
                <p>
                  Para saber más sobre
                  <strong> el diagrama de Venn</strong>, te recomendamos leer lo
                  siguiente:
                </p>
                <ul>
                  <li>
                    Conway, D. (2010).
                    <em> The Data Science Venn diagram</em>. Recuperado de
                    <OpenLink
                      link={
                        "http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram"
                      }
                    />
                  </li>
                </ul>
                <p>
                  Para saber más sobre
                  <strong> Python</strong>, revisa las siguientes ligas:
                </p>
                <ul>
                  <li>
                    Python. (s.f.).
                    <em> What is Python? Executive Summary</em>. Recuperado de
                    <OpenLink link={"https://bit.ly/35kVWjS"} />
                  </li>
                  <li>
                    W3schools.com. (s.f.).
                    <em> Python Tutorial</em>. Recuperado de
                    <OpenLink link={"https://bit.ly/35fGvJG"} />
                  </li>
                  <li>
                    Python. (s.f.).
                    <em> Beginner's Guide to Python</em>. Recuperado de
                    <OpenLink link={"https://bit.ly/2CYzbWU"} />
                  </li>
                  <li>
                    Desarrollo web. (2019).
                    <em>
                      {" "}
                      Jupyter Notebook: documentos web para análisis de datos,
                      código en vivo y mucho más
                    </em>
                    . Recuperado de
                    <OpenLink link={"https://bit.ly/37q5T1d"} />
                  </li>
                </ul>
                <p>Para saber más sobre</p>
                <strong> NumPy y Pandas</strong>, te recomendamos leer lo
                siguiente:
                <ul>
                  <li>
                    Suryavanshi, A. (2018).
                    <em>Intro to Pandas and Numpy: Basic Tutorials Part 6. </em>
                    <OpenLink
                      link={
                        "https://medium.com/@Shatriya/intro-to-pandas-and-numpy-532a2d5293c8"
                      }
                    />
                  </li>
                  <li>
                    Willems, K. (2019).
                    <em> Python Numpy Array Tutorial</em>. Recuperado de
                    <OpenLink link={"https://bit.ly/2Oa6g8J"} />
                  </li>
                  <li>
                    DataFlair Team. (2018).
                    <em>
                      {" "}
                      Python NumPy Tutorial – NumPy ndarray & NumPy Array.{" "}
                    </em>
                    <OpenLink
                      link={
                        "https://data-flair.training/blogs/python-numpy-tutorial/"
                      }
                    />
                  </li>
                  <li>
                    Willems, K. (2019).
                    <em> Pandas Tutorial: DataFrames in Python</em>
                    <OpenLink link={"https://bit.ly/2D2Qm9E"} />
                  </li>
                  <li>
                    Pydata.org. (2019).
                    <em> pandas: powerful Python data analysis toolkit</em>.
                    Recuperado de
                    <OpenLink link={"https://bit.ly/37nBIIa"} />
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div style={{ height: "3rem" }}></div>
      </div>
    </div>
  );
}
