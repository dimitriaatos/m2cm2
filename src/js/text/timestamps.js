const timestamps = [
	[
		2, 0.918104, 0.232438, 0.622396, 0.691917, 0.273917, 0.069646, 0.089708,
		0.431771, 1.1465, 0.25925, 0.338313, 0.330729, 4.845313, 0.61746, 0.212948,
		0.356054, 0.199773, 0.13737, 0.467642, 0.529524, 0.806871, 0.20517,
		0.257302, 0.294785, 0.793741, 1.221338, 0.179705, 0.612449, 0.286281,
		0.669796, 0.223243, 0.188322, 0.288231, 0.520884, 0.149093, 0.096939,
		0.613197, 4.80195, 0.234626, 0.118798, 0.375714, 0.669819, 0.216553,
		0.198027, 0.23127, 0.726531, 0.274354, 0.164195, 2.12381, 0.182608,
		0.226304, 0.186213, 0.203946, 1.296054, 0.344036, 0.167506, 0.185102,
		2.125238, 0.13907, 0.368549, 0.915351, 0.185782, 0.850159, 0.24127,
		0.656576, 0.829478, 0.433878, 0.245624, 0.16771, 0.767574, 0.152426,
		0.370023, 0.833741, 0.387029, 0.417982, 0.63254, 0.277438, 0.240816,
		0.728186, 5.257755, 0.281746, 0.36161, 0.937347, 0.225533, 0.676916,
		0.191134, 0.495397, 0.504308, 0.604603, 3.630771, 0.098413, 0.642812,
		0.773583, 0.285669, 1.004444, 0.129161, 0.738798, 0.172834, 0.55093,
		0.02542, 2.3, 0.29839, 0.70712, 0.312857, 0.113878, 0.527619, 0.124807,
		0.066145, 1.066463, 0.193946, 0.322472, 0.77415, 1.768571, 0.160952,
		0.724127, 0.30059, 0.414422, 0.15356, 0.925011, 0.2, 0.166259, 0.291655,
		1.017732, 0.125374, 1.534376, 0.353129, 0.465102, 0.220839, 0.846349,
		0.19805, 0.296757, 2.621383, 0.620794, 0.971361, 0.374989, 0.11771,
		0.414059, 0.284943, 0.102041, 0.359909, 0.596349, 0.617188, 0.561361,
		2.707914,
	],
	[
		2, 0.509342, 0.879093, 0.201655, 0.671451, 0.747075, 0.516531, 0.21458,
		0.177596, 0.676576, 0.119796, 0.251043, 0.757891, 0.192698, 0.140544,
		0.400091, 0.131134, 3.166689, 1.139569, 0.68805, 0.179138, 0.14585,
		0.874331, 0.438163, 0.163424, 0.087687, 0.692562, 1.624014, 0.161474,
		0.291655, 0.270794, 0.144104, 0.710113, 0.219796, 0.280227, 0.249977,
		0.133855, 0.544785, 1.446372, 0.229184, 0.176054, 0.754172, 0.414853,
		0.159841, 1.524172, 0.342154, 0.149501, 0.229161, 0.502789, 0.466576,
		4.567052, 0.140091, 0.678934, 1.077256, 0.1922, 0.581066, 0.299093,
		0.100385, 0.099796, 0.49932, 0.468707, 1.080748, 0.24585, 0.347982,
		0.567098, 0.10585, 0.372018, 0.33517, 0.203673, 3.600113, 0.301406,
		0.347415, 0.206848, 0.133265, 0.625011, 0.645805, 1.044286, 0.229637,
		0.094807, 0.393243, 1.996848, 0.90263, 0.218231, 0.157279, 0.897234,
		0.218413, 0.145488, 0.694444, 0.306213, 0.173197, 0.326327, 0.270816,
		0.13127, 0.711701, 2.858594, 0.984875, 0.196372, 0.29576, 0.356281,
		0.393764, 0.897914, 0.209751, 0.652585, 0.283469, 0.817687, 0.555782,
		0.247347, 0.365102, 3.736349, 0.42424, 1.111701, 0.929206, 0.737506,
		0.241633, 0.573946, 2.946893,
	],
	[
		2.270313, 0.183979, 0.864313, 0.194979, 0.164646, 0.262125, 0.396438,
		0.275125, 0.747333, 0.166813, 0.996458, 0.133958, 0.721708, 0.238292,
		0.461417, 0.632542, 3.368396, 0.168979, 0.678021, 0.262042, 0.736604,
		0.693188, 0.171146, 0.847, 0.257792, 2.106896, 1.207375, 0.303271, 0.684521,
		1.054917, 0.091042, 0.292438, 0.225313, 0.153813, 0.140813, 1.914688,
		1.090313, 0.59175, 0.55225, 0.108104, 0.135146, 0.612542, 2.873438,
		0.459417, 1.25925, 0.25, 0.463438, 0.180167, 0.180188, 0.522458, 0.306271,
		0.27025, 0.5585, 0.504438, 0.288271, 0.108104, 2.618125, 0.687688, 0.279271,
		0.450396, 0.180167, 0.162167, 0.490417, 0.167146, 0.882771, 0.180188,
		0.594521, 0.477417, 2.432083, 0.612542, 0.108104, 0.585521, 0.189167,
		0.198188, 0.540479, 0.216208, 3.576042, 0.666583, 0.162167, 0.180167,
		0.504438, 0.226646, 0.78225, 1.255,
	],
	[
		2, 0.333333, 0.224989, 0.117188, 0.204535, 0.369932, 0.62619, 3.623787,
		0.229161, 0.202063, 0.193787, 0.703107, 1.276054, 0.509365, 0.407302,
		3.479184, 0.274989, 0.200431, 0.161451, 1.176689, 0.629138, 0.226531,
		0.484921, 0.574989, 2.741111, 0.363061, 0.249864, 0.245465, 0.363197,
		0.48102, 3.327098, 0.229184, 0.270839, 0.577052, 0.251565, 0.183855,
		0.430726, 2.049456,
	],
	[
		2, 0.777098, 0.78254, 0.190363, 0.198957, 0.638526, 0.193855, 1.101542,
		4.150431, 0.282721, 0.447438, 0.130295, 0.15254, 0.495283, 0.312517,
		0.27576, 0.286735, 0.799478, 0.119796, 1.640612, 0.161497, 1.0078, 0.20415,
		0.462472, 0.208345, 0.125057, 2.333333, 0.336463, 0.242177, 0.163537,
		0.457302, 0.241882, 0.612789, 0.162404, 0.679297, 0.445782, 0.226576,
		1.96771, 0.193265, 0.221361, 0.367483, 0.135714, 0.797098, 0.19966,
		0.225215, 0.57424, 0.89585, 0.833356, 0.276259, 0.251406, 0.639388, 2.38551,
		0.171882, 0.634671, 0.682494, 0.247211, 0.301723, 0.95102, 0.307166,
		0.244898, 0.206621, 0.970499, 0.171247, 0.274558, 0.121338, 0.838662,
		3.364966, 0.215873, 1.126508, 0.178413, 0.276077, 0.18678, 0.319977,
		0.585941, 0.203197, 0.261383, 0.354807, 0.291043, 0.235488, 0.55619,
		0.228209, 0.730113, 0.146122, 0.27356, 0.800091, 0.224853, 0.137415,
		0.522041, 4.663039, 0.229819, 0.597256, 0.16771, 0.643243, 0.247937,
		0.471905, 0.708322, 0.218889, 0.100454, 0.808594, 0.247732, 1.071633,
		0.36517, 0.809841, 0.655737, 3.638526,
	],
	[
		2, 0.819093, 0.228277, 0.880204, 0.208481, 0.742562, 0.242721, 0.909887,
		0.177098, 0.319478, 0.17619, 0.71263, 0.594263, 0.222177, 0.236644,
		0.634376, 3.932812, 0.256803, 0.458844, 0.167732, 0.160249, 0.684535,
		2.239524, 0.201587, 0.344965, 0.360204, 0.179206, 0.174172, 0.589365,
		4.172925, 0.160385, 1.28424, 0.18483, 0.697574, 0.15966, 1.361179, 0.239569,
		0.600476, 1.920363, 0.154694, 1.189592, 0.186939, 0.19898, 0.658957,
		0.55873, 0.145873, 1.520771, 0.309773, 0.093878, 4.346372, 1.009546,
		0.485238, 0.450499, 0.172925, 0.344263, 1.531247, 0.307506, 0.270839,
		0.564762, 0.158889, 0.337982, 0.306304, 0.210045, 0.829025, 0.208299,
		0.505964, 0.446168, 0.500091, 0.115374, 0.40839, 0.294785, 0.562494,
		0.979161, 1.148639, 0.136236, 0.466916, 0.075306, 0.901474, 4.250567,
		0.330726, 0.679637, 0.70941, 0.382608, 0.120136, 0.420703, 0.10678,
		0.141678, 0.842653, 3.296893,
	],
	[
		2, 0.366122, 0.16805, 2.456961, 0.209796, 0.213107, 3.577075, 0.283855,
		0.191678, 0.496871, 0.748957, 1.341134,
	],
	[
		2, 0.168231, 0.665624, 0.720839, 0.552063, 0.1622, 0.605533, 3.096871,
		0.864036, 0.406803, 0.2, 1.029161, 1.000023, 1.00932, 0.990658, 0.7422,
		1.278617, 0.979206, 0.624921, 0.220385, 0.609342, 4.045329, 0.13805,
		0.736916, 0.197392, 0.108367, 0.393175, 0.092744, 0.475011, 0.448934,
		0.54322, 0.437506, 0.663537, 0.17034, 1.302426, 0.120023, 0.222313,
		3.950023, 0.624966, 0.354172, 0.634512, 0.677937, 0.179705, 0.278639,
		0.423401, 0.1, 0.449501, 0.509773, 0.132404, 2.415624, 0.104172, 2.131769,
		0.608322, 0.875034, 0.198435, 0.83, 0.603855, 0.673946, 3.205193, 0.151633,
		0.732948, 0.603923, 0.535488, 0.228005, 0.706213, 0.246395, 0.601134,
		0.649864, 0.186463, 0.518254, 0.765624, 0.233039, 0.762766, 0.507823,
		0.156848, 0.57381, 0.203152, 0.610431, 1.486077,
	],
]

export default timestamps