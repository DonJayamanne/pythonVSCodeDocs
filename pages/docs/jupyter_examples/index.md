---
title: Examples
---

- [Standard plot](#Standard-plot)
- [Interactive Plot using D3js](#Interactive-Plot-using-D3js)
- [Interactive Plot using Bokeh](#Interactive-Plot-using-Bokeh)
- [LaTex](#LaTex)
- [Inline images](#Inline-images)
- [IFrame](#IFrame)
- [More examples](#More-examples)

![Examples](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/examples.gif)

### <a id="Standard-plot">Standard plot</a>
- Paste the following code in a python file
- Execute it (either selecting the code or using the ```Run cell``` code lens).
- The result is a static graph displayed in the ```Results``` window

```python
#%%
import matplotlib.pyplot as plt
import matplotlib as mpl
import numpy as np

x = np.linspace(0, 20, 100)
plt.plot(x, np.sin(x))
plt.show() 
```

### <a id="Interactive-Plot-using-D3js">Interactive Plot using D3js</a>
- Paste the following code in a python file
- Execute it (either selecting the code or using the ```Run cell``` code lens).
- The result is an interactive displayed in the ```Results``` window
- Check here for more infor on [D3js](http://mpld3.github.io/)

Note: Hover the mouse over the graph and a toolbar should appear allowing you to interact with the graph

```python
#%%
import matplotlib.pyplot as plt
import numpy as np
import mpld3

mpld3.enable_notebook()
fig, ax = plt.subplots(subplot_kw=dict(axisbg='#EEEEEE'))
ax.grid(color='white', linestyle='solid')
N = 50
scatter = ax.scatter(np.random.normal(size=N),
                     np.random.normal(size=N),
                     c=np.random.random(size=N),
                     s = 1000 * np.random.random(size=N),
                     alpha=0.3,
                     cmap=plt.cm.jet)
ax.set_title("D3 Scatter Plot", size=18);
```

### <a id="Interactive-Plot-using-Bokeh">Interactive Plot using Bokeh</a>
- Paste the following code in a python file
- Execute it (either selecting the code or using the ```Run cell``` code lens).
- The result is an interactive displayed in the ```Results``` window
- Check here for more info on [Bokeh graphs](http://bokeh.pydata.org/en/latest/docs/gallery.html)

Note: Use the toolbar next to the graph image, to interact with the graph.

```python
#%%
from bokeh.io import push_notebook, show, output_notebook
from bokeh.layouts import row, gridplot
from bokeh.plotting import figure, show, output_file
output_notebook()

import numpy as np

x = np.linspace(0, 4*np.pi, 100)
y = np.sin(x)
TOOLS = "pan,wheel_zoom,box_zoom,reset,save,box_select"

p1 = figure(title="Legend Example", tools=TOOLS)
p1.circle(x,   y, legend="sin(x)")
p1.circle(x, 2*y, legend="2*sin(x)", color="orange")
p1.circle(x, 3*y, legend="3*sin(x)", color="green")
show(p1)
```

### <a id="LaTex">LaTex</a>
- Check here for more info on [LaTex](http://matplotlib.org/users/usetex.html)

```pytohn
#%%
from IPython.display import Latex
Latex('''The mass-energy equivalence is described by the famous equation

$$E=mc^2$$

discovered in 1905 by Albert Einstein.
In natural units ($c$ = 1), the formula expresses the identity

\\begin{equation}
E=m
\\end{equation}''')
```

### <a id="Inline-images">Inline images</a>

```python
#%%
from IPython.display import Image
Image('http://jakevdp.github.com/figures/xkcd_version.png')
```

### <a id="IFrame">IFrame</a>

```python
#%%
from IPython.core.display import HTML
HTML("<iframe src='http://www.ncdc.noaa.gov/oa/satellite/satelliteseye/cyclones/pfctstorm91/pfctstorm.html' width='750' height='600'></iframe>")
```

### <a id="More-examples">More examples</a> 
- Interactive Matplotlib graphs using d3js ([mpld3](http://mpld3.github.io/examples/index.html)) 
- Interactive [Bokeh graphs](http://bokeh.pydata.org/en/latest/docs/gallery.html) 
- [LaTex](http://matplotlib.org/users/usetex.html)
